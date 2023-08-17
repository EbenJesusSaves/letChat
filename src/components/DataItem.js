import react from 'react'

import React from 'react'
import { Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import styled from 'styled-components'
import { ProfileImage } from './profile/ProfileImage'

export const DataItem = (props) => {
    const { title, subTitle, image } = props
    return (
        <TouchableWithoutFeedback>
            <Container>
                <ProfileImage uri={image} size={50} />
                <TextContainer>
                    <Text style={{ color: 'white', alignContent: 'center' }} numberOfLines={1}>{title}</Text>
                    <Text style={{ color: 'white' }} numberOfLines={1}>{subTitle}</Text>
                </TextContainer>
            </Container>
        </TouchableWithoutFeedback>
    )
}


const Container = styled.View`
flex-direction: row;
padding-vertical: 10px;
border-bottom-color: ${(p) => p.theme.colors.brand.secondary};
border-bottom-width: 1
`
const TextContainer = styled.View`

`