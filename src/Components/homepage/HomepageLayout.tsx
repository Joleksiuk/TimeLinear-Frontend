import {
    HomepageContainerStyled,
    HomepageTextStyled,
    HomepageTextContainerStyled,
    HomepageTextHeader,
    HomepageImage,
    HomepageImageMoved,
    FlexContainer,
    ImagesFlexContainer,
} from './HomepageLayout.styled'

export default function HomepageLayout() {
    return (
        <HomepageContainerStyled>
            <FlexContainer>
                <HomepageImage
                    height={'40%'}
                    width={'40%'}
                    src="https://zapodaj.net/images/5a11a03b8236f.png"
                    alt=""
                />
                <HomepageTextContainerStyled>
                    <HomepageTextHeader>
                        Introducing Timelinear!
                    </HomepageTextHeader>
                    <HomepageTextStyled>
                        Your Ultimate Event Planning Companion! Plan, Visualize,
                        and Share Your Events Like Never Before Are you tired of
                        juggling multiple apps to manage your events? Say
                        goodbye to the chaos and welcome the all-in-one solution
                        that simplifies event planning, Timeline Charts, and
                        Calendar Management
                    </HomepageTextStyled>
                </HomepageTextContainerStyled>
            </FlexContainer>
            <FlexContainer>
                <HomepageTextContainerStyled>
                    <HomepageTextHeader>
                        Introducing Timelinear!
                    </HomepageTextHeader>
                    <HomepageTextStyled>
                        Your Ultimate Event Planning Companion! Plan, Visualize,
                        and Share Your Events Like Never Before Are you tired of
                        juggling multiple apps to manage your events? Say
                        goodbye to the chaos and welcome the all-in-one solution
                        that simplifies event planning, Timeline Charts, and
                        Calendar Management
                    </HomepageTextStyled>
                </HomepageTextContainerStyled>
                <HomepageImage
                    height={'50%'}
                    width={'50%'}
                    src="https://zapodaj.net/images/5b98740da19bf.png"
                    alt=""
                />
            </FlexContainer>

            <HomepageTextContainerStyled>
                <HomepageTextHeader>Timeline charts</HomepageTextHeader>
                <HomepageTextStyled>
                    Transform your events into stunning, interactive timeline
                    charts. Watch your plans come to life with just a few
                    clicks. Customize colors, labels, and milestones.
                </HomepageTextStyled>
            </HomepageTextContainerStyled>
            <ImagesFlexContainer>
                <HomepageImage
                    height={'50%'}
                    width={'50%'}
                    src="https://zapodaj.net/images/99133597d1cb6.png"
                    alt=""
                />
                <HomepageImage
                    height={'50%'}
                    width={'50%'}
                    src="https://zapodaj.net/images/271914fcb78af.png"
                    alt=""
                />
            </ImagesFlexContainer>
        </HomepageContainerStyled>
    )
}
