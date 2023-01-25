import React from 'react';
import { List } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import AccordionComponent from 'app/components/AccordionComponent';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import HeaderComponent from 'app/components/HeaderComponent';
import Styles from './style';

interface Props {}

const Helpusscreen: React.FC<Props> = (props) => {
    // const [expanded, setExpanded] = React.useState(true);
    const [login, setLogin] = React.useState(true);
    const [forgotPassword, setForgotPassword] = React.useState(true);
    const [editProfile, setEditProfile] = React.useState(true);
    const [searchProfile, setSearchProfile] = React.useState(true);
    const [sendMessage, setSendMessage] = React.useState(true);
    const [replyToMessage, setReplyToMessage] = React.useState(true);
    const [addPhoto, setAddPhoto] = React.useState(true);
    const [packages, setPackages] = React.useState(true);

    // const handlePress = () => setExpanded(!expanded);
    return (
        <View>
            <HeaderComponent menuicon={'arrow-left'} headerName={'Helpusscreen'} />
            <View style={Styles.container}>
                {/* <View style={Styles.mainView}> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={Styles.subView}>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Login?'}
                            listTitle={'How to Login?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                { title: '•    Visit https://www.jodibanomatrimony.com' },
                                { title: '•    Enter the Registered e-mail ID and Password' },
                                { title: '•    Click on the "SIGN IN" option on the homepage' },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={login}
                            onPress={() => {
                                setLogin(!login);
                            }}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'Forgot Password'}
                            listTitle={'Forgot Password'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    Please select the "Forgot Password?" option and enter the registered e-mail ID',
                                },
                                {
                                    title: '•    A link to reset the password will be sent to your registered e-mail ID',
                                },
                                { title: '•    Click on the link and enter the new password' },
                                {
                                    title: '•    Now you can use the new password to login to your profile',
                                },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={forgotPassword}
                            onPress={() => setForgotPassword(!forgotPassword)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Edit Profile?'}
                            listTitle={'How to Edit Profile?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    Login to your profile with your registered e-mail ID and Password',
                                },
                                {
                                    title: '•    After you login to your profile, please select the "Manage" option from the top navigation menu',
                                },
                                { title: '•    Select "My Profile" in the Manage section' },
                                {
                                    title: '•    Click on the pen symbol that appears next to the section you wish to modify',
                                },
                                {
                                    title: '•    Make the necessary changes and click on the "Save" option',
                                },
                                {
                                    title: '•    Modified content will be displayed on your profile after approval',
                                },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={editProfile}
                            onPress={() => setEditProfile(!editProfile)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Search Profile?'}
                            listTitle={'How to Search Profile?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    Login to your profile with your registered e-mail ID and Password',
                                },
                                {
                                    title: '•    After logging-in please select the "Search" option from the top navigation menu',
                                },
                                {
                                    title: '•    Your partner preference criteria will be prefilled by default',
                                },
                                {
                                    title: '•    Make the necessary changes if required and click on the "Search" button',
                                },
                                {
                                    title: '•    Profiles that match the search criteria will be displayed',
                                },
                                {
                                    title: '•    If you wish to filter the profiles further, you can choose the necessary filter options from the left navigation menu',
                                },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={searchProfile}
                            onPress={() => setSearchProfile(!searchProfile)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Send Message?'}
                            listTitle={'How to Send Message?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: 'Free member:',
                                    description:
                                        '•    Login to your profile with your registered e-mail ID and Password from the login screen',
                                },
                                {
                                    description:
                                        '•    Once you login to your profile, please select the profile you wish to contact from the Search results or from the Dashboard',
                                },
                                {
                                    description:
                                        '•    Click the "Send Message" option and select the message you wish to send',
                                },
                                {
                                    description:
                                        '•    You will be notified once the member replies to your message',
                                },
                                {
                                    title: 'Paid member:',
                                    description:
                                        '•    Login to your profile with your registered e-mail ID and Password',
                                },
                                {
                                    description:
                                        '•    After you login to your profile, please select the member you wish to contact from the Search results or from the Dashboard',
                                },
                                {
                                    description:
                                        '•    Click the "Send Message" option and select the message you wish to send or type your own message and send it to the selected member',
                                },
                                {
                                    description:
                                        '•    For a quick response we suggest you share your contact details in the message',
                                },
                                {
                                    description:
                                        '•    You will be notified once the member replies to your message',
                                },
                                // { description:'' },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={sendMessage}
                            onPress={() => setSendMessage(!sendMessage)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Reply Message?'}
                            listTitle={'How to Reply Message?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    Login to your profile with your registered e-mail ID and Password',
                                },
                                {
                                    title: '•    Once you login to your profile, please select the "Inbox" option from the left navigation menu',
                                },
                                {
                                    title: '•    Unread messages will be displayed; if you wish to reply to a message that has already been read, change the status from "Unread" to "Read" to display the message',
                                },
                                {
                                    title: '•    Select the message and click the "Reply" button',
                                },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={replyToMessage}
                            onPress={() => setReplyToMessage(!replyToMessage)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'How to Add Photo?'}
                            listTitle={'How to Add Photo?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    Login to your profile with your registered e-mail ID and Password',
                                },
                                {
                                    title: '•    Once you login to your profile, please select the "Manage" option from the top navigation menu',
                                },
                                {
                                    title: '•    Select "My Profile" in the Manage section and choose the option "Photos',
                                },
                                {
                                    title: '•    Select the photo you wish to display and upload it to your profile',
                                },
                                { title: '•    Please add images that are less than 10MB' },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={addPhoto}
                            onPress={() => setAddPhoto(!addPhoto)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            left={(props) => (
                                <List.Icon
                                    icon="chevron-down"
                                    color="white"
                                    style={Styles.downArrowStyle}
                                />
                            )}
                            title={'What are the Packages available?'}
                            listTitle={'What are the Packages available?'}
                            // sectionTitle={'sjhdjasd'}
                            data={[
                                {
                                    title: '•    We have three different types of packages ranging from Rs.3000 to Rs.6000. We also offer the top-up option to access additional phone numbers or to avail our Astro matching facility.',
                                },
                                {
                                    title: 'Membership Packages:',
                                    description:
                                        '50 days validity - Rs.3650 (unlimited messages along with 25 phone numbers)',
                                },
                                {
                                    description:
                                        '•    100 days validity - Rs.4700 ( unlimited messages along with 100 phone numbers)',
                                },
                                {
                                    description:
                                        '•    200 days validity - Rs.7450 (unlimited messages along with 150 phone numbers)',
                                },
                                {
                                    title: 'Top-up Packages',
                                    description: '•    Additional 25 phone numbers - Rs.750)',
                                },
                                {
                                    description:
                                        '•    Astro Match Reports (25 matched profile) - Rs.500',
                                },
                                {
                                    title: 'Click here to make a payment and upgrade your profile to paid services.',
                                },
                            ]}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={packages}
                            onPress={() => setPackages(!packages)}
                            titleStyle={Styles.titleStyle}
                            style={Styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                    </View>
                </ScrollView>
                {/* </View> */}
            </View>
        </View>
    );
};

Helpusscreen.defaultProps = {};

export default Helpusscreen;
