import { useState } from 'react';
import {
  Typography,
  Stack,
  MenuItem,
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider from 'src/components/hook-form';
import { useI18nContext } from '../../../i18n/i18n-react';
import CustomRHFTextField from '../components/CustomRHFTextField';
import CustomRHFSelect from '../components/CustomRHFSelect';

import img_contrast from '../../../assets/images/img_contrast.svg';

const subjectList = ['Information Request', 'Technical Support', 'Sales Support', 'Others'];

type FormValuesProps = {
  email: string;
  name: string;
  subject: string;
  message: string;
};

const ContactUs = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  const { LL } = useI18nContext();

  const defaultValues = {
    email: '',
    name: '',
    subject: '',
    message: '',
  };

  const VerifyContactUsSchema = Yup.object().shape({
    email: Yup.string().email(LL.emailValid()).required(LL.emailRequired()),
    name: Yup.string().required(LL.fullNameRequired()),
    subject: Yup.string().required(LL.subjectRequired()),
    message: Yup.string().required(LL.messageRequired()),
  });

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyContactUsSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log('DATA:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Grid container id="contact" sx={{ backgroundColor: '#1C223C' }}>
        <Stack
          spacing={2}
          sx={{ width: '90%', backgroundColor: '#1C223C', margin: 'auto', paddingY: '80px' }}
        >
          <Grid
            container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#141a36',
            }}
          >
            <Grid
              container
              sx={{
                backgroundColor: '#141a36',
                border: '2px solid grey',
                color: '#fff',
                borderRadius: '20px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#fff',
                backgroundImage: 'linear-gradient(180deg, #ffffff4c, #ffffff00)',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingY: '10px',
              }}
            >
              <Box display="flex" alignItems="center" p={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#141a36',
                    fontSize: '32px',
                    fontWeight: '700',
                    paddingX: '50px',
                    paddingY: '10px',
                    borderRadius: '16px',
                    textTransform: 'capitalize',
                  }}
                >
                  Contact Us
                </Button>
              </Box>
              <Box component="img" padding={2} alt="The house from the offer." src={img_contrast} />
            </Grid>
          </Grid>
          <Grid container display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={2}>
              <Typography
                fontSize="32px"
                fontWeight="700"
                lineHeight="1.2"
                color="#fff"
                textAlign="center"
              >
                Need any assistance?
              </Typography>
              <Typography fontSize="18px" fontWeight="500" color="#a2a5b8" textAlign="center">
                You didn’t find the answer in the FAQ? Contact us by filling in the form
              </Typography>
              <FormControl sx={{ backgroundColor: '#272f4c', color: '#fff' }}>
                <OutlinedInput placeholder="Full Name" sx={{ color: '#fff' }} />
              </FormControl>
              <FormControl sx={{ backgroundColor: '#272f4c' }}>
                <OutlinedInput placeholder="Email" sx={{ color: '#fff' }} />
              </FormControl>
              <FormControl fullWidth sx={{ backgroundColor: '#272f4c' }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  onChange={() => handleChange}
                  value={value}
                  sx={{ color: '#fff' }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ backgroundColor: '#272f4c' }}
                id="outlined-multiline-static"
                multiline
                rows={6}
                placeholder="Message"
                inputProps={{ style: { color: '#fff' } }}
              />
              <Button
                sx={{
                  backgroundColor: '#fbb532',
                  color: 'white',
                  height: '56px',
                  fontWeight: '700',
                  form: 'capitalize',
                }}
              >
                Send
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </Grid>
    </div>
  );
};

export default ContactUs;
