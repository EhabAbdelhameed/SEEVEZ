import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from '../styles';
import UserSection from './User';
import FooterSection from './footerPagaination';

const ContainerUsers = ({title, data}: {title: string; data: any[]}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust this based on your requirement

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle pagination
  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the data to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);
  return (
    <View style={styles.containerUsers}>
      <Text style={styles.titleSection}>{title}</Text>
      <View style={styles.container2Users}>
        <FlatList
          data={data}
          contentContainerStyle={{rowGap: 10}}
          scrollEnabled={false}
          renderItem={({item}) => <UserSection item={item} />}
          ListFooterComponent={() => (
            <FooterSection
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePagination}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ContainerUsers;
