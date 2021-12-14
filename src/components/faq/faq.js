import React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import facicon from '../../assets/images/faqicon.png';
import faqiconopened from '../../assets/images/faqiconopened.svg';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Faq = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const renderIcon = () => {
        return (
            <div>
                <img src={facicon} className='faqIconClosed' alt=""/>
                <img src={faqiconopened} className='faqIconOpened' alt=""/>
            </div>
        )
    }

    return (
        <div className='faq' id='faq'>
            <h2 className="title">FAQ</h2>
            <div className="faqContainer" data-aos="flip-left" data-aos-delay="0">
                <Accordion   className='faqAccordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>What are Century Warriors?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                Century Warriors is a series of hand drawn NFTs minted on the Cardano blockchain. Century Warriors allows the community to build their own Warrior through two unique drops. The original three warriors consist of: a samurai, a knight, a soldier. The first drop will consist of the heads of the warriors. The second drop will include the body of the warriors. The community will be able to collect and match various head pieces with armour pieces and in the end combine the two to complete their warrior.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion   className='faqAccordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>What makes us unique?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                We are the first NFT project that allows the community to create and build their own character. Century Warriors holders will be able to trade amongst each other to create their own desirable character.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion   className='faqAccordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>How many century warriors are being released?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                For the first drop, there will be a total of 3333* head pieces split into the three characters. (1111 Samurais. 1111 Soldiers, and 1111 Knights)<br />
                                The second drop, for bodies, will be dependent on how many heads are distributed to the community<br />
                                *Based on demand we might release more heads to a maximum of 9999 total, there will be never more than that
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion   className='faqAccordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>How do we combine the head and body?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                A full detailed combination guide is released on our Discord under #combining section!
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion   className='faqAccordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>How much does it cost to mint a Century Warrior?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                The head and body will both cost 44ADA each to mint. There are no price tiers. Abilities card airdrop will be FREE
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion   className='faqAccordion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary expandIcon={renderIcon()} aria-controls="panel1d-content" id="panel1d-header">
                        <Typography><span className='faqAccordionTitle'>When is the first drop?</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p className='faqAccordionText'>
                                The first official drop is on December 18th. Our team is making sure everything is smooth & perfect for the drop and no shortcuts are made.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
