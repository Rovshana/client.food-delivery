import React from "react";
import { useTranslation } from "react-i18next";
import {
  ChildBox,
  Para,
  Title,
  ImageHolder,
  CardTitle,
  CardP,
  ParentDiv,
} from "./Cards.styled";
import {useEffect, useState} from 'react'

import { dishesApi } from "../../../api/dishes";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../store/slices/CardSlice";
function CardsBottom(props) {
  const {t} =useTranslation();
  const cardState = useSelector(state =>state.CardSlice.data)
  console.log(cardState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    test()
  }, [])
  const test = ()=>{
    dishesApi.then(res=>{
      
      dispatch(setData(res.data.dishes))
    })
  }
  return (
    <div className="container " style={{marginBottom: "100px"}}>
      <div>
        <Title>{t("common.out popular")}</Title>
        <Para>
          {t("common.header desc")}
        </Para>
      </div>
      <ParentDiv className="row">
        {
          cardState?.map((item, index)=>(
            <ChildBox className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <ImageHolder>
              <img src={item.photo} alt="" />
            </ImageHolder>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardP>
                Lorem ipsum is placeholder commonly used in the graphic{" "}
              </CardP>
            </div>
          </ChildBox>
          ))
        }
        
        
      </ParentDiv>
    </div>
  );
}

export default CardsBottom;