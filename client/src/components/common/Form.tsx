import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  const { name, onChange, onBlur, ref } = register('title', { required: true });
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a property
      </Typography >
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC" >
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter property name</FormHelperText>
            <TextField fullWidth required id="outlined-basic" color="info" style={{ border: "1px solid gray", borderRadius: "6px" }} variant="outlined" name={name} onChange={onChange} onBlur={onBlur} ref={ref} />
          </FormControl>
        </form>
      </Box>
    </Box>
  )
};

export default Form;
