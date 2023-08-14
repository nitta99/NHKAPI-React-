import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";

type GenreSelectProps = {
  onChange: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const GenreSelect = ({ onChange }: GenreSelectProps) => {
  return (
    <>
      <FormControl>
        <Select onChange={onChange} sx={{ width: "200px" }}>
          <MenuItem value="0000">ニュース／報道</MenuItem>
          <MenuItem value="0100">スポーツ</MenuItem>
          <MenuItem value="0205">情報／ワイドショー</MenuItem>
          <MenuItem value="0300">ドラマ</MenuItem>
          <MenuItem value="0409">音楽</MenuItem>
          <MenuItem value="0502">バラエティー</MenuItem>
          <MenuItem value="0600">映画</MenuItem>
          <MenuItem value="0700">アニメ／特撮</MenuItem>
          <MenuItem value="0800">ドキュメンタリー／教養</MenuItem>
          <MenuItem value="0903">劇場／公演</MenuItem>
          <MenuItem value="1000">趣味／教育</MenuItem>
          <MenuItem value="1100">福祉</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
