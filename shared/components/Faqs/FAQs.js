import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
function FAQs(props) {
    

    return (
        <div className='container'>
          <h3 className='title'>F.A.Q</h3>
          <div className='test'>
         <Accordion>
        <AccordionSummary
          addIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How to contact with Customer Service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          addIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>I am completely alien to everything that is technology. Can I adopt Foody?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Foody is exactly for you, it has flexible structure, you can easily order whatever dishes you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          addIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> How long is delivery time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Delivery time varies by location and by time of day. However, you will be notified when your order is ready or when it is picked up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          addIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What Payment method can I use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For payment, we accept Credit Cards, PayPal and as well as you can pay at door.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          addIcon={<AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What are your delivery Hours?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our delivery hour is from 10:00 AM  to 11PM.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
       </div> 
         </ div>
    )
}
export default FAQs