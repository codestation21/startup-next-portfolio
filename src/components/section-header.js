import React from 'react';
import {Box, Text, Heading} from 'theme-ui';

export default function SectionHeader({title, slogan, isWhite}) {
    return (
        <Box variant="sectionHeader">
            <Text
                as="p"
                sx={{
                    color: isWhite ? 'white' : 'primary',
                    opacity: isWhite ? 0.7 : 1
                }}
                variant="sectionHeader.subTitle"
            >
                {slogan}
            </Text>
            <Heading
                as="h2"
                sx={{
                    color: isWhite ? 'white' : 'heading'
                }}
                variant="seactionHeader.title"
            >
                {title}
            </Heading>
        </Box>
    )
        ;
}
