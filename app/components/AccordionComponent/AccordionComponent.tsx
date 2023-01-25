import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AccordionView from 'react-native-accordion-view';
import { List } from 'react-native-paper';

interface Props {
    title?: string;
    sectionTitle?: string;
    listTitle?: string;
    description?: any;
    left?: (text: any) => void;
    right?: (text: any) => void;
    expanded?: boolean;
    onPress?: () => void;
    onLongPress?: () => void;
    children?: () => void;
    theme?: any;
    titleStyle?: any;
    descriptionStyle?: any;
    titleNumberOfLines?: number;
    descriptionNumberOfLines?: number;
    id?: any;
    testID?: string;
    accessibilityLabel?: string;
    style?: any;
    data?: any;
}

const AccordionComponent: React.FC<Props> = (props) => {
    return (
        <List.Section title={props.sectionTitle}>
            <List.Accordion
                title={props.listTitle}
                description={props.description}
                left={props.left}
                right={props.right}
                expanded={props.expanded}
                onPress={props.onPress}
                onLongPress={props.onLongPress}
                theme={props.theme}
                titleStyle={props.titleStyle}
                descriptionStyle={props.descriptionStyle}
                titleNumberOfLines={props.titleNumberOfLines}
                descriptionNumberOfLines={props.descriptionNumberOfLines}
                id={props.id}
                testID={props.testID}
                accessibilityLabel={props.accessibilityLabel}
                style={props.style}>
                {!!props.data && props.data.map((item) => <List.Item title={item.title} description={item.description} style={item.style} />)}
            </List.Accordion>
        </List.Section>
    );
};

AccordionComponent.defaultProps = {
    title: '',
    description: {},
    left: () => {},
    right: () => {},
    expanded: false,
    onPress: () => {},
    onLongPress: () => {},
    children: () => {},
    theme: '',
    titleStyle: {},
    descriptionStyle: '',
    titleNumberOfLines: 1,
    descriptionNumberOfLines: 1,
    id: '',
    testID: '',
    accessibilityLabel: '',
    style: {},
};

export default AccordionComponent;
