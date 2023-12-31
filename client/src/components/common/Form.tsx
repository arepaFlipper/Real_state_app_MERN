import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage }: FormProps) => {
  const aparment_values = ["aparment", "villa", "farmhouse", "condos", "townhouse", "duplex", "studio", "chalet"];
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a property
      </Typography >
      <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC"  >
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter property name</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              style={{ border: "1px solid gray", background: 'gray', borderRadius: "6px", color: '#919191' }}
              variant="outlined"
              {...register('title', { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter Description</FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              style={{ width: '100%', background: 'transparent', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }}
              {...register('description', { required: true })}
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
                style={{ border: "1px solid gray", background: 'gray' }}
                {...register('propertyType', { required: true })}
              >
                {aparment_values.map((val, idx) => {
                  const capitalized = val.charAt(0).toUpperCase() + val.slice(1);
                  return (
                    <MenuItem key={`${val}_${idx}`} value={val}>{capitalized}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter property price</FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                color="info"
                type="number"
                style={{ border: "1px solid gray", borderRadius: "6px", background: 'gray' }}
                variant="outlined"
                {...register('price', { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#11142D' }}>Enter Location</FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              style={{ border: "1px solid gray", borderRadius: "6px", background: 'gray' }}
              variant="outlined"
              {...register('location', { required: true })}
            />
          </FormControl>
          <Stack direction="column" gap={1} justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography color="#11142D" fontSize={16} fontWeight={500} my="10px">Property Photo</Typography>
              <Button component="label" sx={{ width: "fit-content", color: "#2ed480", textTransform: 'capitalize', fontSize: 16 }}>
                Upload *
                <input
                  hidden
                  accept="image/"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    return handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography fontSize={14} color="#808191" sx={{ wordBreak: "break-all" }}>{propertyImage?.name}</Typography>
            <CustomButton
              type="submit"
              title={formLoading ? 'Submitting...' : 'Submit'}
              backgroundColor="#475be8"
              color="#FCFCFC"
            />
          </Stack>
        </form>
      </Box>
    </Box >
  )
};

export default Form;
