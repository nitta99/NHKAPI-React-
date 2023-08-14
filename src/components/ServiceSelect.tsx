import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";

type ServiceSelectProps = {
  onChange: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const ServiceSelect = ({ onChange }: ServiceSelectProps) => {
  return (
    <>
      <FormControl>
        <Select onChange={onChange} sx={{ width: "200px" }}>
          <MenuItem value="g1">NHK総合１</MenuItem>
          <MenuItem value="g2">NHK総合２</MenuItem>
          <MenuItem value="e1">NHKEテレ１</MenuItem>
          <MenuItem value="e2">NHKEテレ２</MenuItem>
          <MenuItem value="e3">NHKEテレ３</MenuItem>
          <MenuItem value="e4">NHKワンセグ２</MenuItem>
          <MenuItem value="s1">NHKBS１</MenuItem>
          <MenuItem value="s2">NHKBS１（１０２ch）</MenuItem>
          <MenuItem value="s3">NHKBSプレミアム</MenuItem>
          <MenuItem value="s4">NHKBSプレミアム（１０４ch）</MenuItem>
          <MenuItem value="r1">NHKラジオ第１</MenuItem>
          <MenuItem value="r2">NHKラジオ第２</MenuItem>
          <MenuItem value="r3">NHKFM</MenuItem>
          <MenuItem value="n1">NHKネットラジオ第１</MenuItem>
          <MenuItem value="n2">NHKネットラジオ第２</MenuItem>
          <MenuItem value="n3">NHKネットラジオFM</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
