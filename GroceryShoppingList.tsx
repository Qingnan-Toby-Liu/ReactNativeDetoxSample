import React, {useState, useCallback} from 'react';
import {Text, Button, TextInput, View} from 'react-native';

const GroceryShoppingList = () => {
  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addNewItemToShoppingList = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
  }, [groceryItem, items]);

  return (
    <View style={{padding: 10, flex: 1}} testID="shoppingListView">
      <Text testID="shoppingTitle" style={{padding: 10}}>
        Shopping list:
      </Text>
      <TextInput
        value={groceryItem}
        testID="shoppingItemText"
        placeholder="Enter grocery item"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button
        title="Add the item to list"
        testID="AddItemButton"
        onPress={() => {
          console.log('You tapped the button!');
          addNewItemToShoppingList();
        }}
      />
      {items.map(item => (
        <Text key={item} testID={item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default GroceryShoppingList;
