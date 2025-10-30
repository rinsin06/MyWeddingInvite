import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I wear to the wedding?",
      answer:
        "The ceremony will have a traditional touch, so ethnic or elegant attire is encouraged. Light pastel shades are perfect for the occasion!",
    },
    {
      question: "What time should we arrive at the venue?",
      answer:
        "Please plan to arrive at least 30 minutes before the ceremony begins so you can settle in and enjoy the beautiful ambiance.",
    },
    {
      question: "Is parking available at the venue?",
      answer:
        "Yes! Both venues have ample parking space. Our team will guide you to the nearest parking spot upon arrival.",
    },
    {
      question: "Will there be arrangements for stay?",
      answer:
        "Yes, accommodations are arranged for outstation guests at La Villa, Thekkumbhagam, Kollam. Details have been shared personally.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Of course! Please let us know beforehand so we can ensure comfortable seating and dining arrangements.",
    },
  ];

  return (
    <Box
      sx={{
        mt: 8,
        mb: 6,
        px: { xs: 2, md: 8 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "#B99732",
          mb: 3,
          fontWeight: 700,
        }}
      >
        💬 Frequently Asked Questions
      </Typography>

      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            elevation={3}
            sx={{
              mb: 2,
              borderRadius: 3,
              "&::before": { display: "none" },
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #FAF8F2 100%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#B99732" }} />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: "#4B4B4B",
                },
              }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#5A5A5A",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.7,
                  textAlign: "left",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
