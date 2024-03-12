import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {selectOneJob} from 'src/redux/app';
import {selectUser} from 'src/redux/auth';
import {useAppSelector} from 'src/redux/store';

const JobDetails = (data:any) => {
 
  const User = useAppSelector(selectUser);
  return (
    <View style={styles.container}>
      {data?.data?.job_description==null?null:
      <View>
      <Text style={styles.sectionTitle}>Responsibilities:</Text>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{marginRight: 5, marginTop: 5, color: '#1C1C1C'}}>•</Text>
        <Text style={styles.descriptionText}>
         {data?.data?.job_description}
        </Text>
      </View>
      </View>}
    
      {/* Add more responsibilities as needed */}

      <Text style={styles.sectionTitle}>Requirements:</Text>
      {data?.data?.job_requirements?.map((item: any) => (
        <View style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={{marginRight: 5, marginTop: 5, color: '#1C1C1C'}}>
            •
          </Text>
          <Text style={styles.descriptionText}>{item}</Text>
        </View>
      ))}
     {/* <Text style={styles.sectionTitle}>Nice to have:</Text>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{marginRight: 5, marginTop: 5, color: '#1C1C1C'}}>•</Text>
        <Text style={styles.descriptionText}>
          BSc (Honors) Computer Science or a similar degree with significant
          computing bias.
        </Text>
      </View> */}

      {/* <Text style={styles.sectionTitle}>Languages:</Text>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <Text style={{marginRight: 5, marginTop: 5, color: '#1C1C1C'}}>•</Text>
        <Text style={styles.descriptionText}>English: C2 Proficiency</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    marginBottom:20
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  descriptionText: {
    fontSize: 12,
    marginTop: 5,
    color: '#1C1C1C',
  },
});

export default JobDetails;
