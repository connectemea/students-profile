// material components
import {
    Typography,
    Grid,
    Card,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio
} from "@mui/material";
import { styled } from "@mui/material/styles";


const ProfileCard = styled(Card)(({ theme }) => ({
    paddingRight: `${theme.spacing(4)} !important`,
    paddingBottom: `${theme.spacing(4)} !important`
}));

export default function FamilyDetailsInput() {

    return (
        <>
            {/* Father Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Father</Typography></Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Name" id="fatherName" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextField fullWidth label="Educational Qualification" id="fatherQualification" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField fullWidth label="Annual Income (Rs)" type="number" id="fatherIncome" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Occupation" id="fatherOccupation" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth multiline label="Official Address" id="fatherAddress" />
                    </Grid>
                </Grid>
            </Grid>

            {/* Mother Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Mother</Typography></Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Name" id="motherName" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextField fullWidth label="Educational Qualification" id="motherQualification" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField fullWidth label="Annual Income (Rs)" type="number" id="motherIncome" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Occupation" id="motherOccupation" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth multiline label="Official Address" id="motherAddress" />
                    </Grid>
                </Grid>
            </Grid>

            {/* Guardian Details */}
            <Grid component={ProfileCard} sx={{ mt: 2, p: 2 }} container spacing={2}>
                {/* Add Details Section */}
                <Grid item md={12}><Typography variant="subtitle1">Guardian</Typography></Grid>
                <Grid item md={12}>
                    <RadioGroup row aria-label="guardian" name="guardian">
                        <FormControlLabel value="father" control={<Radio />} label="Father" />
                        <FormControlLabel value="mother" control={<Radio />} label="Mother" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </Grid>
                <Grid item md={12} container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Name" id="guardianName" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3} >
                        <TextField fullWidth label="Educational Qualification" id="guardianQualification" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <TextField fullWidth label="Annual Income (Rs)" type="number" id="guardianIncome" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth label="Occupation" id="guardianOccupation" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <TextField fullWidth multiline label="Official Address" id="guardianAddress" />
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}