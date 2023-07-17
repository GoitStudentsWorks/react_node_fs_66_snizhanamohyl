import React from "react";
import {
    ContainerCard,
    ImgCard,
    TitleCard,
    TextCard,
    ContainerContent,
    ContainerBtnRecipe,
    TimeCard,
    Container,
    ContainerHeaderRecipe,
        } from '../MyRecipeItem/MyRecipesItem.styled.jsx';
import ButtonDelRicepe from '../ButtonDelRecipe/ButtonDel.jsx';
import ButtonRecipeSee from '../ButtonRecipeSee/ButtonRecipeSee.jsx';
import { useDispatch } from "react-redux";
import { deleteRecipeFromFavorites } from 'redux/Favorite/operations'


const MyRecipeItem = ({recipe, isFavorites}) => {
    const dispatch = useDispatch()
    const {preview, title, _id:{$oid}, description, time} = recipe;

    const onClick = () => {
        dispatch(deleteRecipeFromFavorites($oid))
        console.log($oid)
    }

    return(
                <ContainerCard key={$oid}> 
                    <ImgCard src={preview} alt={title} />
                    <Container>
                        <ContainerContent>
                            <ContainerHeaderRecipe>
                                <TitleCard>{title}</TitleCard>
                                    <ButtonDelRicepe isFavorites={isFavorites} onClick={onClick}/>
                            </ContainerHeaderRecipe>
                            <TextCard>{description}</TextCard>
                        </ContainerContent>              
                        <ContainerBtnRecipe>
                                <TimeCard>{time} min</TimeCard>
                                <ButtonRecipeSee isFavorites={isFavorites} path={`/recipe/${$oid}`}/>
                        </ContainerBtnRecipe>
                    </Container>
                </ContainerCard>
    )
}

export default MyRecipeItem
