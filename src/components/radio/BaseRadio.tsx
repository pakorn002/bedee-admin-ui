import {
  FormControlLabel,
  RadioGroup as MuiRadioGroup,
  Box,
  Typography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'
import { Colors } from '../../colors'
import { ChangeEvent } from 'react'
import RadioButton from './RadioButton'

interface RadioGroupData {
  label: string
  value: string | number
}

interface RadioGroupProps {
  name?: string
  data: RadioGroupData[]
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>, name?: string) => void
  isRow?: boolean
  title?: string
  disabled?: boolean
  titleProps?: MuiTypographyProps
}

const RadioGroup = (props: RadioGroupProps) => {
  const { name, data, value, onChange, isRow = false, title, disabled, titleProps } = props

  const onChangeValue = (event: any) => onChange(event.target.value, name)

  const titleLabel = title ? <Typography {...titleProps}>{title}</Typography> : undefined

  const content = data.map(({ label, value: val }, index) => (
    <FormControlLabel
      key={index}
      checked={value == val}
      value={val}
      control={<RadioButton />}
      sx={FormControlLabelStyle}
      label={label}
      disabled={disabled}
    />
  ))

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {titleLabel}
      <MuiRadioGroup onChange={onChangeValue} row={isRow}>
        {content}
      </MuiRadioGroup>
    </Box>
  )
}

const FormControlLabelStyle = {
  '& .MuiFormControlLabel-label': { color: Colors.gray6 },
}

export default RadioGroup
