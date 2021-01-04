/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import ThumbRocketData from './thumb-rocket-data';

import { ServiceFactory } from '@api/ServiceFactory';

import * as S from './styles';

const rockets = ServiceFactory.get('rockets');

const RocketGrapqhl = () => {
  const [dataFromQuery, setDataFromQuery] = useState<any>();
  const [filteredArray, setFilteredArray] = useState<any>();
  const { loading, error, data } = useQuery(rockets.get());

  const updatedData = () => {setDataFromQuery(data?.launchesPast), setFilteredArray(data?.launchesPast);};

  useEffect(() => {
    updatedData();
    console.log(data);
    return () => updatedData();
  }, [data, loading]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Something went wrong</p>;

  const handleChange = (event) => {
    const searchValue = event.target.value;
    const filtered = dataFromQuery.filter((item)=>{
      return item.mission_name.toLowerCase().includes(searchValue.toLowerCase()) || item.rocket.rocket_name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredArray(filtered);
  };

  return (
    <S.Container>
      <S.Input type={"text"} placeholder={"Search by mission and rocket name"} onChange={handleChange}/>
      <ThumbRocketData {...{ filteredArray }} />
    </S.Container>
  );
};

export { RocketGrapqhl as default };
