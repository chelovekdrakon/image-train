import React, { PureComponent } from 'react';

import { upload } from '/utils';
import { makeIterator } from '/utils';

import { Form } from '/imports/ui/components/Form';
import { List } from '/imports/ui/components/List';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: black;
`;

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            files: []
        };

        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
    }

    updateFiles(name, status) {
        const { files } = this.state;

        const updatedArr = files.map(file => {
            if (file.name === name) {
                file.progress = status === 200 ? 'DONE' : status; // can't use spread operator for this
                return file;
            } else {
                return file;
            }
        });

        this.setState({
            files: updatedArr
        });
    }

    onRefresh() {
        this.setState({
            files: []
        })
    }

    iterate(iterator) {
        const { value, done } = iterator.next();

        if (!done) {
            upload(value).then(({ status, reason }) => {
                this.updateFiles(value.name, reason || status);
                this.iterate(iterator);
            }).catch(err => {
                console.log(err);
            });
        } else {
            console.log('image upload done')
        }
    }

    handleImageUpload({ target: { files } }) {
        const filesArr = Array.from(files);
        const iterator = makeIterator(filesArr);

        this.setState({
            files: filesArr
        })

        this.iterate(iterator);
    }

    handleClick() {
        document.getElementById("upload-input").click();
    }
    
    render() {
        const { files } = this.state;
        return (
            <Container> 
                {
                    files.length === 0 ? (
                        <Form
                            onChange={this.handleImageUpload} 
                            onClick={this.handleClick}
                            value="UPLOAD"
                        />
                    ) : (
                        <List files={files} onRefresh={this.onRefresh} />
                    )
                }
            </Container>
        );
    }
}

export default HomePage;