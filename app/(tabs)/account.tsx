import DownloadPicture from "@/components/BottomSheet"
import { useState } from "react"
import { Text, Button, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Account(){
    const [pictureOpen, setPictureOpen] = useState(false)
    return <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>

        <Text>from accounts page</Text>
        <Button title="open bottom sheet" onPress={()=>{
            setPictureOpen(true)
        }}></Button>

        {pictureOpen&& <DownloadPicture onClose= {()=>setPictureOpen(false)}/>}
        </View>
    </SafeAreaView>
}