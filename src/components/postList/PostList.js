import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { Post } from '../post/Post'





export const PostList = ({ data, onOpen }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={el => el.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})