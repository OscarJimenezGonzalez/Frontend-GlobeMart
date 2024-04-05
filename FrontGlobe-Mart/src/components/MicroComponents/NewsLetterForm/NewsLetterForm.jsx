import React from 'react';
import { TextField, Checkbox, Button, FormControlLabel, Grid, Typography } from '@mui/material';

function NewsLetterForm() {
  return (
    <form noValidate autoComplete="off">

      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography color="primary"><strong>Email</strong> required</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email-input"
            label="Enter your email here"
            type="email"
            placeholder="Enter your email here"
            variant="outlined"
            fullWidth
          // margin="normal"
          />
        </Grid>

        <Grid item xs={12}>

          <FormControlLabel
            control={
              <Checkbox
                // required
                name="privacyPolicy"
                color="primary"
              />
            }
            label={<Typography variant='subtitle2'>Check the box to agree with privacy policy (required)</Typography>}>
          </FormControlLabel>
        </Grid>


        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#1E1E1E', '&:hover': { backgroundColor: '#333' } }}
            fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}

export default NewsLetterForm;