import React from 'react'
import { View, FlatList,Text } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/Cards/DetailCard';
import {API_RECIPE } from '../../APIs';

const Detail = ({ route }) => {
    const { idMeal } = route.params;
    const { loading, error, data } = useFetch(`${API_RECIPE}=${idMeal}`);
    console.log(data);

    const renderProduct = ({ item }) => <DetailCard product={item} />

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />;
    }

    return (
        <View>
            <FlatList
                data={data.meals}
                renderItem={renderProduct}
            />
        </View>
    )
}

export default Detail