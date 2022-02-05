import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Rough = () => {

    return (
        <>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem >
                    <AccordionItemHeading >
                        <AccordionItemButton style={{ backgroundColor: "transparent", color: "white", padding: "23px", margin: "10px 0px ", border: "1px solid white", borderLeft: "none", borderRight: "none" }}>
                            <span id='heading'> Digital</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>4K rendered animation <br />
                            4K rendered stills <br />
                            Custom digital recreation of The Baran Sanichar Shirt in 1 open metaverse of choice. <br /> Redemption window: 2 years
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ backgroundColor: "transparent", color: "white", padding: "23px", margin: "10px 0px ", border: "1px solid white", borderLeft: "none", borderRight: "none" }}>
                            Experiential
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>The official website of Metavastra will contain the collector's name displayed with The Baran Sanichar Shirt.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className='acc'>
                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ backgroundColor: "transparent", color: "white", padding: "23px", margin: "10px 0px ", border: "1px solid white", borderLeft: "none", borderRight: "none" }}>
                            Details
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Full Sleeve shirt with hand painted half wolf. The painting is done by the family involved in the traidtional Worli Art which is native to the state of maharashta since the last 700 years. Minting: This NFT will be minted to layer 1 Ethereum. <br />
                            BONUS: The winner of this item will receive access to the ultra-exclusive gold tier of the forthcoming #metavastraFamily NFT community, becoming one of the first people in the world to do so.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>

        </>
    );
};

export default Rough;
