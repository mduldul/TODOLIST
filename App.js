import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Header from './Components/header';
import Button from './Components/button';
import TabBar from './Components/TabBar';

const {height, width} = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    title: '',
    desc: '',
    data: []
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <Header title={'TODO LIST'} />
        {/* Man Page */}
        <View style={{ width, backgroundColor: '#fafa', flex: 8, alignItems: 'center', justifyContent: 'flex-start' }}>
          <TextInput
            placeholder={'Title'}
            style={{
              height: 40, borderColor: 'gray', borderWidth: 1, width: width * 0.8, marginBottom: 10, backgroundColor: 'white', padding: 5,
              borderRadius: 20, marginTop: 50
            }}
            onChangeText={(title) => this.setState({ title })}

            value={this.state.title}
          />
          <TextInput
            // secureTextEntry
            multiline
            numberOfLines={10}
            placeholder={'Desc'}
            style={{
              height: 100, borderColor: 'gray', borderWidth: 1, width: width * 0.8, marginBottom: 10, backgroundColor: 'white', padding: 5,
              borderRadius: 20
            }}
            onChangeText={(desc) => this.setState({ desc })}
            value={this.state.desc}
          />
          <Button
            buttonStyle={{ backgroundColor: 'red' }}
            titleStyle={{ color: 'blue' }}
            butonClick={() => {
              const { title, desc } = this.state;
              const obje = {
                title,
                desc
              }

              this.setState(prevState => ({
                data: [...prevState.data, obje]
              }));

              this.setState({
                title: '',
                desc: ''
              });
            }
            }
          />

          {/* liste  */}
          <ScrollView style={{}}>
            {this.state.data.map((value, i) => {
              console.log(this.state.data.length);
              return (
                <View key={i} style={{ width, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginTop: 10 }}>
                  <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>{value.title}</Text>
                  <Text style={{ marginTop: 20 }}>{value.desc}</Text>
                </View>
              )
            }
            )
            }
          </ScrollView>
        </View>

        <TabBar isLogin={false} />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
