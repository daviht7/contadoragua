import React,{ useState } from 'react';
import { View,StyleSheet, ImageBackground,Text, Button } from 'react-native';

// import { Container } from './styles';

export default function App() {

  const [consumido,setConsumido] = useState(0)
  const [status,setStatus] = useState("Ruim")
  const [pct,setPct] = useState(0.00)
  const [meta,] = useState(2000)

  function addCopo() {
    setConsumido(consumido+200)
    atualizar()
  }

  function atualizar() {
    setPct(parseFloat(pct+10).toFixed(2));
    setStatus(consumido >= meta ? "Bom" : "Ruim")
  }

  return (
    <View style={styles.body}>
      <ImageBackground style={styles.bgimage} source={require("./images/water.png")}>
      <View>
        <View style={styles.infoArea}>
          <View style={styles.area}>
            <Text style={styles.texto}>Meta</Text>
            <Text style={styles.areaDado}>{ `${meta}ml` }</Text>
          </View>
          <View style={styles.area}>
          <Text style={styles.texto}>Consumido</Text>
          <Text style={styles.areaDado}>{ `${consumido}ml` }</Text>
          </View>
          <View style={styles.area}>
            <Text style={styles.texto}>Status</Text>
            <Text style={styles.areaDado}>{ status }</Text>
          </View>
        </View>

        <View style={styles.pctArea}>
          <Text style={styles.pctText}>{ `${pct}%` }</Text>
        </View>

        <View style={styles.btnArea}>
          <Button title="Beber 200ml" onPress={addCopo} />
        </View>

      </View>
      
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

    body : {
      flex:1,
      paddingTop: 20
    },
    bgimage : {
      flex: 1,
      width: null
    },
    infoArea : {
      flex: 1,
      flexDirection : "row",
      marginTop: 70
    },
    area : {
      flex: 1,
      alignItems: "center"
    },
    texto : {
      fontWeight : "bold",
      fontSize: 20,
      color: "#45b2fc"
    },
    areaDado : {
      color : "#2b4274",
      fontSize : 25,
      fontWeight : "bold"
    },
    pctArea : {
      marginTop: 170,
      alignItems: "center"
    },
    pctText : {
      fontSize: 70,
      color : "#2b4274",
      backgroundColor : "transparent"
    },
    btnArea : {
      marginTop : 30,
      alignItems : "center"
    }

})