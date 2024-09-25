import { Typography, Grid2, Box} from '@mui/material';
import styles from './page.module.css';
// Large screen grids are side by side
// Small screen grids are stacked on top of each other (wip)
export default function LandingPage() {
    return (
        <Grid2 container spacing={{sm: 2}}>
            
            <Grid2 size={{sm: 4, xs: 12}} sx={{ mt: {sm: 12, xs: 6} }}>
            </Grid2>
            <Grid2 size={8} sx={{ mt: {sm: 12, xs: 6} }}>
                <Box
                    sx={{
                        p: 2,
                        mb: 2,
                        boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(71, 71, 71, 0.5)',
                        borderRadius: 2,
                        transition: 'box-shadow 0.3s, background-color 0.3s',
                        '&:hover': {
                            boxShadow: '0px 8px 12px rgba(255, 255, 255, 0.7)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}>
                    <Typography variant="h8" align="center">
                    Welcome to Overstock Hub, your premier marketplace for buying and selling surplus or pre-owned industrial tools and materials. Our platform is designed to help industries turn their excess inventory into value, while providing businesses and individuals with access to high-quality tools and materials at competitive prices. Whether you're looking to sell surplus stock or find a cost-effective solution for your next project, Overstock Hub simplifies the process. All you need to do is list your items with us, receive offers, and connect with buyers who are ready to collect the goods directly from your location.
                    </Typography>
                </Box>
            </Grid2>

            <Grid2 size={8}>
                <Box
                    sx={{
                        p: 2,
                        mb: 2,
                        boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(71, 71, 71, 0.5)',
                        borderRadius: 2,
                        transition: 'box-shadow 0.3s, background-color 0.3s',
                        '&:hover': {
                            boxShadow: '0px 8px 12px rgba(255, 255, 255, 0.7)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}>
                    <Typography variant="h8" align="center">
                    At Overstock Hub, we are committed to promoting sustainable business practices through the principles of green and circular economy. By facilitating the reuse of materials and tools, we help businesses reduce waste, extend product life cycles, and contribute to a more resource-efficient economy. Our platform allows companies to reimagine their excess stock as valuable assets rather than waste, keeping useful products out of landfills and in circulation.
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 size={{sm: 4, xs: 12}}>
            </Grid2>

            <Grid2 size={{sm: 4, xs: 12}}>
            </Grid2>
            <Grid2 size={8}>
            <Box
                    sx={{
                        p: 2,
                        mb: 2,
                        boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(71, 71, 71, 0.5)',
                        borderRadius: 2,
                        transition: 'box-shadow 0.3s, background-color 0.3s',
                        '&:hover': {
                            boxShadow: '0px 8px 12px rgba(255, 255, 255, 0.7)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}>
                    <Typography variant="h8" align="center">
                    Our easy-to-use marketplace is designed for convenience and transparency. Sellers can effortlessly post their overstock or used items, while buyers can browse a wide range of products across different industries. Once a match is made, the buyer makes an offer and, upon agreement, arranges to collect the items. Overstock Hub ensures a streamlined experience, connecting you with the right buyers or sellers to meet your needs, all while supporting eco-friendly commerce.
                    </Typography>
                </Box>
            </Grid2>

            <Grid2 size={8}>
            <Box
                    sx={{
                        p: 2,
                        mb: 2,
                        boxShadow: '0px 4px 6px rgba(255, 255, 255, 0.5)',
                        backgroundColor: 'rgba(71, 71, 71, 0.5)',
                        borderRadius: 2,
                        transition: 'box-shadow 0.3s, background-color 0.3s',
                        '&:hover': {
                            boxShadow: '0px 8px 12px rgba(255, 255, 255, 0.7)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                        }}>
                    <Typography variant="h8" align="center">
                    Join us today at Overstock Hub and become part of a growing community that prioritizes sustainability and resourcefulness. Together, we can help businesses thrive while reducing environmental impact, one transaction at a time. Let’s build a greener, more sustainable future through the power of responsible trade and the circular economy.
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 size={{sm: 4, xs: 12}}>
            </Grid2>
            
        </Grid2>
    );
}