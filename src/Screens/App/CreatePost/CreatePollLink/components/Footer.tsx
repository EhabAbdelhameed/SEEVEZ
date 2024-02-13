import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { SaveCircle } from 'assets/Svgs'
import { appColors } from 'theme'
import { useSelector } from 'react-redux'
import { selectPhotoData } from 'src/redux/app'
import AppThunks from 'src/redux/app/thunks'
import { useAppDispatch } from 'src/redux/store'

const Footer = (data:any) => {
    const photoData=useSelector(selectPhotoData)
    const [isLoading,setLoading]=useState(false)
    const dispatch=useAppDispatch()
    const sharePhotoData =()=>{
       
            if (photoData.key== '1') {
              setLoading(true);
              const formdata = new FormData();
             photoData.addonesCaption!=null? formdata.append('addons_caption',photoData.addonesCaption):null
             data?.caption!=''? formdata.append('caption',data?.caption):null
             photoData.pdf!=null? formdata.append('media',{
                uri: photoData?.pdf[0]?.uri,
                type: photoData?.pdf[0]?.type,
                name: photoData?.pdf[0]?.name,
              }):null
              photoData.location!=null? formdata.append('location',photoData.location):null

              //  console.log(source) item?.node?.image?.uri
              formdata.append(`photo[0][files]`, {
                uri: photoData?.image?.node?.image?.uri,
                type: photoData?.image?.node?.type,
                name: `image.${photoData?.image?.node?.type?.slice(6)}`,
              });
        
              console.log("Photo123 ",JSON.stringify(formdata))
              dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
               
                setLoading(false);
              });
            } else if(photoData.key=='2'){
            
             
              setLoading(true);
              const formdata = new FormData();
              //  console.log(source) item?.node?.image?.uri
              formdata.append(`photo[0][files]`, {
                uri: photoData?.image?.assets[0]?.uri,
                type:photoData?.image?.assets[0]?.type,
                name: photoData?.image?.assets[0]?.fileName,
              });
        
              console.log("Photo123 ",JSON.stringify(formdata))
              dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
               
                setLoading(false);
              });
            }else{
              setLoading(true);
              const formdata = new FormData();
              //  console.log(source) item?.node?.image?.uri
        
              for(let i=0;i<photoData?.image?.length;i++){
                //array[${index}][end_date]
                formdata.append(`photo[${i}][files]`, {
                  uri: photoData?.image[i]?.node?.image?.uri,
                  type: photoData?.image[i]?.node?.type,
                  name: `image.${photoData?.image[i]?.type?.slice(6)}`,
                });
              }
           
        
              console.log("Photo123 ",JSON.stringify(formdata))
              dispatch(AppThunks.doUploadPhotoReel(formdata)).then((res: any) => {
               
                setLoading(false);
              });
        
        
        
        
        
            }
     
         
    }
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerLeftSide}>
                <SaveCircle />
                <Text style={styles.textOption}>Save</Text>
            </View>
            <TouchableOpacity onPress={sharePhotoData} style={styles.btnShare}>
                {isLoading?<ActivityIndicator color={'#FFF'} size={'small'}/>:
                <Text style={[styles.textOption, {
                    color: appColors.white
                }]}>Share</Text>}
            </TouchableOpacity>
        </View>
    )
}

export default Footer