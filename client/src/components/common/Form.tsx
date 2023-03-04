import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  const { name_title, onChange_title, onBlur_title, ref_title } = register('title', { required: true });
  const { name_desc, onChange_desc, onBlur_desc, ref_desc } = register('title', { required: true });
  const { name_aparment, onChange_aparment, onBlur_aparment, ref_aparment } = register('aparment', { required: true });
  const aparment_values = ["aparment", "villa", "farmhouse", "condos", "townhouse", "duplex", "studio", "chalet"];
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a property
      </Typography >
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC" >
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter property name</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              style={{ border: "1px solid gray", borderRadius: "6px" }}
              variant="outlined"
              name={name_title}
              onChange={onChange_title}
              onBlur={onBlur_title}
              ref={ref_title}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter Description</FormHelperText>
            <TextareaAutosize
              minRows={5}
              required placeholder="Write description"
              color="info"
              style={{ width: '100%', background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }}
              name={name_desc}
              onChange={onChange_desc}
              onBlur={onBlur_desc}
              ref={ref_desc}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }} >
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>
                Select Property Type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="aparment"
                style={{ border: "1px solid gray" }}
                name={name_aparment}
                onChange={onChange_aparment}
                onBlur={onBlur_aparment}
                ref={ref_aparment}
              >{aparment_values.map((val) => {
                const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
                return (
                  <MenuItem value={val}>{capitalized}</MenuItem>
                )
              })}</Select>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box >
  )
};

export default Form;
