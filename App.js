import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Movies from './components/Movies';

export default function App() {
  const [movie, setMovie] = useState();

  const [taskItems, setTaskItems] = useState([]);

  const handleAddMovie = () => {
    setTaskItems([...taskItems, movie]);
    setMovie(null);

  }

  const completeMovie = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
        <View style = {styles.taskWrapper}> 
            <Text style={styles.sectionTitle}>Movies Watched App</Text>
            <Text style={styles.Title}>List of all watched Movies</Text>
              <View style = {styles.items} >
                {
                  taskItems.map((item,index) => {
                   return  (
                     <TouchableOpacity key={index}  onPress={() => completeMovie()}>
                      <Movies text = {item} />
                     </TouchableOpacity>
                   )
                  })
                }
                <Movies text={'Default Movie'}/>
              </View>
        </View>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : 'height'} 
          style={styles.writeMovie} >
            <TextInput  style={styles.input} placeholder={'Add a new Movie'} value={movie} onChangeText={text => setMovie(text)}/>
            <TouchableOpacity onPress={() => handleAddMovie()} >
              <View style = {styles.addWrapper}>
                <Text style = {styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E5E8',
  },
  taskWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Title: {
    fontSize: 20,
    textAlign: 'center'
  },
  items: {
    marginTop: 50,
  },
  writeMovie: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 270,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#87CEEB',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
  }
});
