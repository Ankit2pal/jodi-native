import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AccordionComponent from 'app/components/AccordionComponent';
import { List, Text, Title } from 'react-native-paper';
import NavigationService from 'app/navigation/NavigationService';
import { onMyProfileDataRequest } from 'app/store/slice/getMyProfileSlice';
import styles from './styles';
import Collapsible from 'react-native-collapsible';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES, width, height } from '../../utils/constants';
interface Props { }

const MyProfile: React.FC<Props> = (props) => {
 const [activeData, setActiveData] = useState(0)


    const dispatch = useDispatch();
    const loginData = useSelector((state) => state?.login);
    const data = useSelector((state) => state?.getMyProfile);
    console.log("data my profile", data?.data);

    useEffect(() => {
        dispatch(onMyProfileDataRequest(loginData.data.UserId));
    }, []) 

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.textcontainer}>
                    <Text style={styles.text1}>My Profile</Text>
                    <Text style={styles.text2}>{data?.data?.FullName}</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={styles.mainView}>
                    <TouchableOpacity style={styles.containerTouchableOpacity}
                        onPress={() => {
                            setActiveData( activeData === 1 ? 0 : 1)
                        }}
                    >
                        <View style={styles.textCollapsibleStyle}>
                            <Text style={styles.titleStyle}>Family details</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={(activeData == 1) ? false : true} >
                        <View  style={styles.CollapsibleView} >
                            <View  style={styles.CollapsiblemaimView}>
                                <View  style={styles.commanView}>
                                    <Text
                                     style={styles.texttitleStyle}
                                     
                                    >Family Type</Text>
                                </View><View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>
                                        {data?.data?.familydetail?.FamilytypeId}
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Fathers Name</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.familydetail?.FathersName}</Text>
                                </View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Mothers Name</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.familydetail?.MothersName}</Text>
                                </View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Number Of Brothers</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.familydetail?.NoOfBrothers}</Text>
                                </View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Number Of Sisters</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.familydetail?.NoOfSisters}</Text>
                                </View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Family Status</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.familydetail?.FamilystatusId}</Text>
                                </View>
                            </View>
                        </View>
                    </Collapsible>

                    <TouchableOpacity style={styles.containerTouchableOpacity}
                        onPress={() => {
                            setActiveData( activeData === 2 ? 0 : 2)
                        }}
                    >
                        <View style={styles.textCollapsibleStyle}>
                            <Text style={styles.titleStyle}>Physical Information</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={(activeData == 2) ? false : true} >
                        <View style={styles.CollapsibleView} >
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Annual IncomeId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.AnnualIncomeId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>BodyTypeId</Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.BodyTypeId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Mothers Name</Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.ComplexionId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>EducationId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.EducationId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>EmploymentTypeId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.EmploymentTypeId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>HeightId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.HeightId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>OccupationId </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.OccupationId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>PhysicalStatusId </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.physicalprofileinfo?.PhysicalStatusId}</Text></View>
                            </View>
                        </View>
                    </Collapsible>

                    <TouchableOpacity style={styles.containerTouchableOpacity}
                        onPress={() => {
                            // setPreferences(!preferences)
                            setActiveData( activeData === 3 ? 0 : 3)
                        }}
                    >
                        <View style={styles.textCollapsibleStyle}>
                            <Text style={styles.titleStyle}>Patner preferences</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={(activeData == 3) ? false : true} >
                        <View style={styles.CollapsibleView} >
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Annual IncomeId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.AnnualIncomeId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CityId</Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.CityId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CountryId </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.CountryId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>EducationId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.EmployeetypeId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>OccupationId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.OccupationId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>StarId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.StarId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>StateId </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.partnerpreferance?.StateId}</Text></View>
                            </View>
                        </View>
                    </Collapsible>

                    <TouchableOpacity style={styles.containerTouchableOpacity}
                        onPress={() => {
                          
                            setActiveData( activeData === 4 ? 0 : 4)
                        }}
                    >
                        <View style={styles.textCollapsibleStyle}>
                            <Text style={styles.titleStyle}>Permanent Location</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={(activeData == 4) ? false : true}  >
                        <View style={styles.CollapsibleView} >
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Address</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.Address1}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>AddressType </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.AddressType}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CityId</Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.CityId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>StateId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.StateId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CountryId </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.CountryId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>district</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.district}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>city </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.city}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>state </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.state}</Text></View>
                            </View>
                        </View>
                    </Collapsible>

                    <TouchableOpacity style={styles.containerTouchableOpacity}
                        onPress={() => {
                            // setWorking(!working)
                            setActiveData( activeData === 5 ? 0 : 5)
                        }}
                    >
                        <View style={styles.textCollapsibleStyle}>
                            <Text style={styles.titleStyle}>Working Location</Text>
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={(activeData == 5) ? false : true}  >
                        <View style={styles.CollapsibleView} >
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>Address</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.workasddress?.Address1}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>AddressType </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.workasddress?.AddressType}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CityId</Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.workasddress?.CityId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>StateId</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.workasddress?.StateId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>CountryId </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.CountryId}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>District</Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.district}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>City </Text>
                                </View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.workasddress?.city?.Name}</Text></View>
                            </View>
                            <View style={styles.CollapsiblemaimView}>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>State </Text></View>
                                <View style={styles.commanView}>
                                    <Text style={styles.texttitleStyle}>{data?.data?.permanantaddress?.state}</Text></View>
                            </View>
                        </View>
                    </Collapsible>
                </View>
            </ScrollView>
        </View>
    );
};

MyProfile.defaultProps = {};



export default MyProfile;
