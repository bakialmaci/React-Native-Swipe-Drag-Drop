import React, { useState, useEffect } from "react";

import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet 
} from "react-native";

import { FlatList, RectButton } from 'react-native-gesture-handler';

import AppleStyleSwipeableRow from './App/components/AppleStyleSwipeableRow';

import DraggableFlatList from "react-native-draggable-flatlist";

export default function App () {
  const [data,setData] = useState(exampleData)

  const Row = ({ item ,drag }) => (
    <TouchableOpacity onLongPress={drag} >
    <RectButton style={styles.rectButton} onPress={() => alert(item.from)}>
      <Text style={styles.fromText}>{item.from}</Text>
      <Text numberOfLines={2} style={styles.messageText}>
        {item.message}
      </Text>
      <Text style={styles.dateText}>
        {item.when} {'❭'}
      </Text>
    </RectButton>
    </TouchableOpacity>
  );
  
  const SwipeableRow = ({ item, drag }) => (
          <AppleStyleSwipeableRow>
            <Row item={item} drag={drag} />
          </AppleStyleSwipeableRow>
  );

    return (
        <DraggableFlatList
          data={data}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={SwipeableRow}
          keyExtractor={(item) => `${item.key}`}
          onDragEnd={(data) => setData(data.data)}
        />
    );
}

const exampleData = [
  {
    key: 1,
    from: "D'Artagnan",
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    key: 2,
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  {
    key: 3,
    from: 'Athos',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
]

const styles = StyleSheet.create({
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
  },
  dateText: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 20,
    top: 10,
    color: '#999',
    fontWeight: 'bold',
  },
});