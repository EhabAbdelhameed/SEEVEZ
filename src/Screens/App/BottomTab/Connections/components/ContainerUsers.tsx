import React from 'react';
import { View, Text, FlatList, } from 'react-native';
import { styles } from '../styles';
import UserSection from './User';
import FooterSectionUsers from './FooterSectionUsers';

const ContainerUsers = ({ title, data }:
    {
        title: string;
        data: any[];
    }) => {
    return (
        <View style={styles.containerUsers}>
            <Text style={styles.titleSection}>{title}</Text>
            <View style={styles.container2Users}>
                <FlatList
                    data={data}
                    contentContainerStyle={{
                        rowGap: 10,
                        
                    }}
                    style={{
                        // height: 450,
                    }}
                    scrollEnabled={false}
                    renderItem={() => <UserSection />}
                    ListFooterComponent={() => <FooterSectionUsers />}
                />

            </View>
        </View>
    )
}



export default ContainerUsers;
