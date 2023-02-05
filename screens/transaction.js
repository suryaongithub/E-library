import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from 'expo-camera';

export default class TransactionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      hasCameraPermissions: null,
      scanned: false,
      scannedData: "",
    };
  }
  render() {
    const { domState, hasCameraPermissions, scanned, scannedData } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{hasCameraPermissions ? scannedData : "requesting for camera pemission"}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>{this.getCameraPermission("scanner")}}
        >
          <Text style={styles.buttonText}>scan QR code</Text>
        </TouchableOpacity>
      </View>
    );
  }
  getCameraPermission = async (domState) => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    console.log(status)
    this.setState({
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false,
    });
    // console.log("gettin permissions")
    // console.log(this.state.hasCameraPermissions)
  };
}

const styles = StyleSheet.create({
  text: {
    color: "#262335",
    fontSize: 30,
    padding: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#f2c7ff",
    // justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    padding: 30,
  },
  buttonText: {
    fontSize: 25,
    color: "dark purple",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8b56d",
    borderRadius: 15,
    padding: 5,
    height: 50,
    width: "60%",
  },
});
