import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AccordionComponent from 'app/components/AccordionComponent';
import { List, Text, Title } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
import FastImage from 'react-native-fast-image';
interface Props {}

const EditProfile: React.FC<Props> = (props) => {
    const [physical, setPhysical] = React.useState(true);
    const [patner, setPatner] = React.useState(true);
    const [familyDetails, setFamilyDetails] = React.useState(true);
    const [Permanent, setPermanent] = React.useState(true);
    const [working, setWorking] = React.useState(true);
    const [preferences, setPreferences] = React.useState(true);

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() =>NavigationService.navigate ('EditProfile2')}>
                    <FastImage
                        source={require('../../assets/Editrprofile.png')}
                        style={styles.fastimageStyle}
                    />
                </TouchableOpacity>
                
             
            </View>
            <Text style={styles.usrnameText}>
                User Name : 1123hukljdfsd32
            </Text>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainView}>
                        <AccordionComponent
                            title={'Physical Information'}
                            listTitle={'Physical Information'}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={physical}
                            onPress={() => setPhysical(!physical)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>

                        <AccordionComponent
                            title={'Patner prefessionl'}
                            listTitle={'Patner prefessionl'}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={physical}
                            onPress={() => setPatner(!patner)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>

                        <AccordionComponent
                            title={'Family details'}
                            listTitle={'Family details '}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={familyDetails}
                            onPress={() => setFamilyDetails(!familyDetails)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>

                        <AccordionComponent
                            title={'Patner preferences'}
                            listTitle={'Patner preferences'}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={preferences}
                            onPress={() => setPreferences(!preferences)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                        <AccordionComponent
                            title={'Permanent Location'}
                            listTitle={'Permanent Location'}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={Permanent}
                            onPress={() => setPermanent(!Permanent)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>

                        <AccordionComponent
                            title={'Working Location'}
                            listTitle={'Working Location'}
                            right={(props) => <List.Icon icon="folder" color="white" />}
                            descriptionNumberOfLines={3}
                            description={''}
                            expanded={working}
                            onPress={() => setWorking(!working)}
                            titleStyle={styles.titleStyle}
                            style={styles.accordianStyle}
                            theme={{ colors: { primary: 'white' } }}></AccordionComponent>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

EditProfile.defaultProps = {};

export default EditProfile;
