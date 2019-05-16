/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.mojodigi.khulasanews;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.provider.Settings;
import android.util.Log;
import android.webkit.ValueCallback;
import android.widget.Toast;

import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.InstanceIdResult;
import com.mojodigi.khulasanews.AndroidUtility.JsonParser;
import com.mojodigi.khulasanews.AndroidUtility.OkhttpMethods;
import com.mojodigi.khulasanews.AndroidUtility.SharedPreferenceUtil;
import com.mojodigi.khulasanews.AndroidUtility.pushUtility;

import org.apache.cordova.*;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.List;

public class MainActivity extends CordovaActivity
{



    //add push notification
    private String fcm_Token ="" ;
    public   String deviceID ="";
    public   String nameOfDevice ="";
    public   String appVersionName ="";

    private Context mContext;
    SharedPreferenceUtil addprefs;
    String clickPushNotification ="";
    int max_execute ;
    //add push notification

    private FirebaseAnalytics mFirebaseAnalytics;

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);

        // Obtain the FirebaseAnalytics instance.
        mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);

        mContext=this;
        if(addprefs==null) {
            addprefs = new SharedPreferenceUtil(mContext);
        }
        if(addprefs!=null){
            clickPushNotification = addprefs.getStringValue(pushUtility.CLICK_PUSH_NOTIFICATION, "");
        }


        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        if(addprefs!=null) {
            boolean st=addprefs.getBoolanValue(pushUtility.isFcmRegistered, false);
            System.out.print(""+st);
           if(!addprefs.getBoolanValue(pushUtility.isFcmRegistered, false)) {
               getPushToken();
           }
        }



        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {

                if(pushUtility.NEWSURL!=null && !pushUtility.NEWSURL.trim().isEmpty() && !pushUtility.NEWSURL.equalsIgnoreCase("") && clickPushNotification.equalsIgnoreCase("true") && !clickPushNotification.trim().isEmpty()) {
                    Log.e("Helper.NEWSURL ", pushUtility.NEWSURL);
                    addprefs.setValue(pushUtility.CLICK_PUSH_NOTIFICATION, "false");

                    if(CordovaActivity.wV!=null)
                    {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                            //wV.evaluateJavascript("(function() { window.dispatchEvent(new CustomEvent(\"MyEventType\", {detail: \"Any Object Here\"})); })();", new ValueCallback<String>() {
                            wV.evaluateJavascript("(function() { window.dispatchEvent(new CustomEvent(\"onNotificationClicked\", {detail: '"+pushUtility.NEWSURL+"'})); })();", new ValueCallback<String>() {
                                @Override
                                public void onReceiveValue(String value) {

                                }
                            });
                        }
                    }

                }


            }
        }, 4000);




    }

    @Override
    protected void onResume() {
        super.onResume();



    }

    private void getPushToken()
    {
        /***********************Start**********************************************/



        deviceID = Settings.Secure.getString(getBaseContext().getContentResolver(), Settings.Secure.ANDROID_ID);
        Log.e("Android ID : ",""+deviceID);
        nameOfDevice = Build.MANUFACTURER+" "+Build.MODEL+" "+Build.VERSION.RELEASE;
        Log.e("Device Name : ",""+nameOfDevice);
        PackageInfo pinfo = null;
        try {
            pinfo = getPackageManager().getPackageInfo(getPackageName(), 0);
            appVersionName = pinfo.versionName;
            Log.e("App Version Name : ",""+appVersionName);


        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }catch (Exception ex){ ex.printStackTrace();}


        FirebaseInstanceId.getInstance().getInstanceId().addOnSuccessListener( MainActivity.this,
                new OnSuccessListener<InstanceIdResult>() {
                    @Override
                    public void onSuccess(InstanceIdResult instanceIdResult) {
                        fcm_Token = instanceIdResult.getToken();
                        Log.e("New Token : ", fcm_Token);

                        if (pushUtility.checkIsOnline(mContext)) {
                            Log.e("Network is available ", "PushNotification Called");
                            new PushNotificationCall().execute();
                        } else {
                            Log.e("No Network", "PushNotification Call failed");
                        }
                    }
                });


        Intent intent = new Intent();
        String manufacturer = android.os.Build.MANUFACTURER;
        switch (manufacturer) {

            case "xiaomi":
                intent.setComponent(new ComponentName("com.miui.securitycenter",
                        "com.miui.permcenter.autostart.AutoStartManagementActivity"));
                break;
            case "oppo":
                intent.setComponent(new ComponentName("com.coloros.safecenter",
                        "com.coloros.safecenter.permission.startup.StartupAppListActivity"));

                break;
            case "vivo":
                intent.setComponent(new ComponentName("com.vivo.permissionmanager",
                        "com.vivo.permissionmanager.activity.BgStartUpManagerActivity"));
                break;
        }

        List<ResolveInfo> arrayListInfo =  getPackageManager().queryIntentActivities(intent,
                PackageManager.MATCH_DEFAULT_ONLY);

        if (arrayListInfo.size() > 0) {
            startActivity(intent);
        }

      /*  if(pushUtility.NEWSURL!=null && !pushUtility.NEWSURL.trim().isEmpty() && !pushUtility.NEWSURL.equalsIgnoreCase("") && clickPushNotification.equalsIgnoreCase("true") && !clickPushNotification.trim().isEmpty()) {
                Log.e("Helper.NEWSURL ", pushUtility.NEWSURL);
                addprefs.setValue(pushUtility.CLICK_PUSH_NOTIFICATION, "false");
                if(CordovaActivity.wV!=null)
                {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                        wV.evaluateJavascript("(function() { window.dispatchEvent(new CustomEvent(\"MyEventType\", {detail: \"Any Object Here\"})); })();", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                Toast.makeText(mContext, "mota   ", Toast.LENGTH_SHORT).show();
                            }
                        });
                    }
                }

*/

            //Intent webIntent = new Intent(MainActivity.this, WebActivity.class);
            //startActivity(webIntent);
        }



    // this web call send token to  server;

    public class PushNotificationCall extends AsyncTask<String,String,String>
    {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();

        }

        @Override
        protected String doInBackground(String... strings) {

            try {
                Log.e("deviceId ", deviceID);
                Log.e("deviceName ", nameOfDevice);
                Log.e("fcmToken ", fcm_Token);
                Log.e("appVer ", appVersionName);

                JSONObject requestObj = pushUtility.prepareFcmJsonRequest(mContext, deviceID, nameOfDevice, fcm_Token , appVersionName);
                return OkhttpMethods.CallApi(mContext, pushUtility.API_PUSH_NOTIFICATION, requestObj.toString());

            } catch (IOException e) {
                e.printStackTrace();
                return ""+e.getMessage();
            }
        }


        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);

            Log.e("Push Json Response ", s);




                if (s != null  ) {
                    try {
                        JSONObject mainJson = new JSONObject(s);
                        if (mainJson.has("status")) {
                            String status = JsonParser.getkeyValue_Str(mainJson, "status");
                            Log.e("status", "" + status);


                            if (status.equalsIgnoreCase("false")) {

                                if (mainJson.has("data")) {
                                    JSONObject dataJson = mainJson.getJSONObject("data");
                                } else {
                                    String message = JsonParser.getkeyValue_Str(mainJson, "message");
                                    Log.e("message", "" + message);
                                }
                            }
                            if (status.equalsIgnoreCase("false")) {
                                Log.e("status", "" + status);

                                if(max_execute<=5){
                                    new PushNotificationCall().execute();
                                    max_execute++;
                                }
                            }
                            else {
                                if(addprefs!=null)
                                  addprefs.setValue(pushUtility.isFcmRegistered, true);
                            }
                        }
                    } catch (JSONException e) {
                        Log.d("jsonParse", "error while parsing json -->" + e.getMessage());
                        e.printStackTrace();
                    }
                } else {
                    Log.e("", "else"  );
                }

        }
    }


}
