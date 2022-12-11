import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { AppHeaderIcon } from '../../components/appHeaderIcon/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { PostList } from '../../components/postList/PostList'


const BookedScreen = ({ }) => {
    const navigation = useNavigation();
    const bookedPosts = useSelector(state => state.post.bookedPosts)
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <PostList
            data={bookedPosts}
            onOpen={openPostHandler}
        />
    )
}
BookedScreen.navigationOption = ({ navigation }) => ({
    headerTitle: 'Избранное',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Togle Drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})


export default BookedScreen