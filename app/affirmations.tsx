import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const affirmations = () => {
    return (
        <View>
            <AppGradient colors={["#2e1f58", "#54426b", "#a79af"]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className='text-zinc-50 text-3xl font-bold'>Change your believe with affirmation</Text>
                    <View>

                    </View>
                </ScrollView>
            </AppGradient>

        </View>
    )
}

export default affirmations;