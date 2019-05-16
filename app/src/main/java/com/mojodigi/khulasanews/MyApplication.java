package com.mojodigi.khulasanews;

import com.yandex.metrica.YandexMetrica;
import com.yandex.metrica.YandexMetricaConfig;

public class MyApplication extends android.support.multidex.MultiDexApplication  {

    @Override
    public void onCreate() {
        super.onCreate();

        //App mertrica sdk

        // Creating an extended library configuration.

        //Apikey in appMetricaDashboard settings  is tracking key--

        YandexMetricaConfig config = YandexMetricaConfig.newConfigBuilder("a8a6ee78-cf5f-4f07-9b21-0d92437237bd").build();
        // Initializing the AppMetrica SDK.
        YandexMetrica.activate(getApplicationContext(), config);
        // Automatic tracking of user activity.
        YandexMetrica.enableActivityAutoTracking(this);

        // Automatic tracking user activity.
        YandexMetrica.enableActivityAutoTracking(this);
        //App mertrica sdk
    }
}
