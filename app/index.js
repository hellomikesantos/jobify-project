import { useState } from 'react';
import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { 
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';


gi
const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.
        white  }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerLeft: () => {
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    },
                    headerRight: () => {
                        <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
                    },
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                 style={{
                    flex: 1,
                    padding: SIZES.medium
                 }}
                 >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                 </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;