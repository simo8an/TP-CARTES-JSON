import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardItem from './CardItem.js';
import cards from '../data/cards.json'; // import du JSON local

// export nommé
export function CardList() {
    const renderItem = ({ item }) => (
        <CardItem
            title={item.title}
            description={item.description}
            image={item.image}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
});
