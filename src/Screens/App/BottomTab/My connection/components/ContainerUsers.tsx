import React from 'react';
import { View, Text, FlatList, } from 'react-native';
import { styles } from '../styles';
import UserSection from './User';
import FooterSectionUsers from './FooterSectionUsers';

const ContainerUsers = ({
    data,
    setLoad
}: {
    data: any[];
    setLoad?: any
}) => {
    return (
        <View style={styles.containerUsers}>
            <View style={styles.container2Users}>
                <FlatList
                    data={data}
                    contentContainerStyle={{ rowGap: 10 }}
                    scrollEnabled={false}
                    renderItem={({item}) => <UserSection setLoad={setLoad} item={item} />}
                    // ListFooterComponent={() => <FooterSectionUsers />}
                />

            </View>
        </View>
    )
}



export default ContainerUsers;
