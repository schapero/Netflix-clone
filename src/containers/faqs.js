import React from 'react';
import faqsData from '../fixtures/faqs.json';
import { Accordion,OptForm } from '../components';
export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            {faqsData.map(item => 
                <Accordion.Item>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>)}
            <OptForm>
                <OptForm.Input placeholder = "Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch \? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}