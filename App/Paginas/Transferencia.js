import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Header from '../Componentes/transferencia/Header'
import Main from '../Componentes/transferencia/Main'
import ModalQrCode from '../Componentes/transferencia/ModalQrCode'
import QRCodeScan from '../Componentes/transferencia/QRCodeScan'

const Transferencia = () => {
  const [user, setUser] = React.useState([])
  const [users, setUsers] = React.useState([])
  const [qrCodeDisplay, setQrCodeDisplay] = React.useState(false)
  const [showQRCodeScan, setShowQRCodeScan] = React.useState(false)
  const [scanData, setScanData] = React.useState()

  const handleQrCodeDisplay = () => {
    qrCodeDisplay ? setQrCodeDisplay(false) : setQrCodeDisplay(true)
  }

  const handleBarCodeScanned = ({type, data}) => {
    setScanData(data)
  }

  const handleShowQRCodeScan = () => {
    showQRCodeScan ? setShowQRCodeScan(false) : setShowQRCodeScan(true)
  }

  const handleClearBarCodeScanned = () => {
    setScanData(undefined)
  }

  React.useEffect(() => {
    fetch("https://unicash-backend-me.free.beeceptor.com/api/me")
      .then(res => res.json())
      .then(json => setUser(json))
  }, [])
  React.useEffect(() => {
    fetch("https://unicash-backend-me.free.beeceptor.com/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users))
  }, [])
  
  return (
    user.length !== 0 ?
    <View style={styles.container}>
      <Header userApi={user} qrCode={handleQrCodeDisplay}/>
      {qrCodeDisplay ? 
        <ModalQrCode 
          userApi={user} 
          qrCode={handleQrCodeDisplay}
        /> 
      : null}
      <Main 
        userApi={user} 
        usersApi={users}
        showQRCodeScan={handleShowQRCodeScan} 
        scanData={scanData}
        clearScanData={handleClearBarCodeScanned}
      />
      {showQRCodeScan ? 
        <QRCodeScan 
          scanData={scanData} 
          qrCodeScan={handleBarCodeScanned}
          clearScanData={handleClearBarCodeScanned}
          showQRCodeScan={handleShowQRCodeScan}
        /> 
      : null}
      <StatusBar style="light" />
    </View>
    :
    <></>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  }
})

export default Transferencia
