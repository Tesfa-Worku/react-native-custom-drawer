import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground} from "react-native";

const MessagesScreen = ({navigation}) => {
    return (
        <SafeAreaView 
            style = {{ 
                flex: 1, 
                justifyContent: "space-between", 
                alignItems: 'stretch'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 40,
                }}
            >
                <Text 
                    style={{
                        fontSize: 18, 
                    }}
                >
                    Messages
                </Text>
                <TouchableOpacity 
                    onPress={() => navigation.openDrawer()}
                >
                    <ImageBackground
                        source={require('../../assets/user-profile.jpg')}
                        style={{width: 35, height: 35}}
                        imageStyle={{borderRadius: 25}}
                    />
                </TouchableOpacity>
            </View>            
        </SafeAreaView>
    )
};

export default MessagesScreen;