import { View, Text, FlatList, Pressable, Image, ImageSourcePropType } from 'react-native'
import React from 'react';
import { GalleryPreviewData } from '@/constants/model';
import { Link } from 'expo-router';

interface GuildedAffirmationsGalleryProps {
    title: string,
    previews: GalleryPreviewData[]
}

const GuildedAffirmationsGallery = ({ title, previews }: GuildedAffirmationsGalleryProps) => {
    return (
        <View className='my-5'>
            <View className='mb-2'>
                <Text className='text-white font-bold text-xl'>{title}</Text>
            </View>
            <View className='text-white font-bold text-xl'>
                <FlatList
                  data={previews}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Link href={`/affirmation/${item.id}`} asChild>
                        <Pressable>
                            <View className='h-36 w-32 rounded-md mr-4'>
                                <Image source={item.image as ImageSourcePropType}
                                resizeMode='cover'
                                className='w-full h-full'
                                />
                            </View>
                        </Pressable>
                    </Link>
                  )}
                />
            </View>
        </View>
    )
}

export default GuildedAffirmationsGallery