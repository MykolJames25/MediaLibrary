import React from 'react';
import {SafeAreaView,  StyleSheet,  StatusBar, FlatList} from 'react-native';
import { createThumbnail } from "react-native-create-thumbnail";
import FastImage from 'react-native-fast-image'
import {MediaType} from "../../types/MediaType"

interface LocalState{
    isLoading:boolean,
    type:Array<any>,
    items:MediaType
}
interface LocalProps{
    type:MediaType
}

const ImageLibrary = () =>{

    return
}

class MediaLibrary extends React.Component<LocalProps,LocalState>{

    constructor(props:LocalProps){
      super(props);
      this.state = {
            isLoading:false,
            type:
            items:[]
      }
    }

    async componentDidMount(){
        if(this.props.type == MediaType.IMAGE){
            await fetch("https://picsum.photos/v2/list?page=2&limit=20").then(res => res.json()).then(
                (result)=>{
                    // console.log("componentDidMount result",result)
                    this.setState({isLoaded:true,imageItems:result})
                    console.log("render imageItems",this.state.imageItems[0]["download_url"]);
                }
            )
        }
    }

    generateMediaLibrary
    
    render(){
        return(
            <SafeAreaView style={{flex:1 ,marginTop: StatusBar.currentHeight || 0,}}>
                <FlatList style={styles.imageList}>
                    {this.state.imageItems.length > 0 && 
                    <>
                    <FastImage
                        style={{ width: 75, height: 75, borderRadius:20, marginHorizontal:5 }}
                        source={{
                            uri: this.state.imageItems[0]["download_url"],
                            // headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <FastImage
                        style={{ width: 75, height: 75, borderRadius:20, marginHorizontal:5 }}
                        source={{
                            uri: this.state.imageItems[1]["download_url"],
                            // headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <FastImage
                        style={{ width: 75, height: 75, borderRadius:20, marginHorizontal:5 }}
                        source={{
                            uri: this.state.imageItems[1]["download_url"],
                            // headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <FastImage
                        style={{ width: 75, height: 75, borderRadius:20, marginHorizontal:5 }}
                        source={{
                            uri: this.state.imageItems[1]["download_url"],
                            // headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                    />
                    </>
                    }
                </FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    imageList:{
        margin:10,
        flexDirection: 'row',
    },
    imgThumbnail:{
        height: 200,
        width:200
    }
})

export default MediaLibrary;