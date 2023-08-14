import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";

type AreaSelectProps = {
  onChange: (event: SelectChangeEvent<HTMLInputElement>) => void;
};

export const AreaSelect = ({ onChange }: AreaSelectProps) => {
  return (
    <>
      <FormControl>
        <Select onChange={onChange} sx={{ width: "200px" }}>
          <MenuItem value="010">札幌</MenuItem>
          <MenuItem value="011">函館</MenuItem>
          <MenuItem value="012">旭川</MenuItem>
          <MenuItem value="013">帯広</MenuItem>
          <MenuItem value="014">釧路</MenuItem>
          <MenuItem value="015">北見</MenuItem>
          <MenuItem value="016">室蘭</MenuItem>
          <MenuItem value="020">青森</MenuItem>
          <MenuItem value="030">盛岡</MenuItem>
          <MenuItem value="040">仙台</MenuItem>
          <MenuItem value="050">秋田</MenuItem>
          <MenuItem value="060">山形</MenuItem>
          <MenuItem value="070">福島</MenuItem>
          <MenuItem value="080">水戸</MenuItem>
          <MenuItem value="090">宇都宮</MenuItem>
          <MenuItem value="100">前橋</MenuItem>
          <MenuItem value="110">さいたま</MenuItem>
          <MenuItem value="120">千葉</MenuItem>
          <MenuItem value="130">東京</MenuItem>
          <MenuItem value="140">横浜</MenuItem>
          <MenuItem value="150">新潟</MenuItem>
          <MenuItem value="160">富山</MenuItem>
          <MenuItem value="170">金沢</MenuItem>
          <MenuItem value="180">福井</MenuItem>
          <MenuItem value="190">甲府</MenuItem>
          <MenuItem value="200">長野</MenuItem>
          <MenuItem value="210">岐阜</MenuItem>
          <MenuItem value="220">静岡</MenuItem>
          <MenuItem value="230">名古屋</MenuItem>
          <MenuItem value="240">津</MenuItem>
          <MenuItem value="250">大津</MenuItem>
          <MenuItem value="260">京都</MenuItem>
          <MenuItem value="270">大阪</MenuItem>
          <MenuItem value="280">神戸</MenuItem>
          <MenuItem value="290">奈良</MenuItem>
          <MenuItem value="300">和歌山</MenuItem>
          <MenuItem value="310">鳥取</MenuItem>
          <MenuItem value="320">松江</MenuItem>
          <MenuItem value="330">岡山</MenuItem>
          <MenuItem value="340">広島</MenuItem>
          <MenuItem value="350">山口</MenuItem>
          <MenuItem value="360">徳島</MenuItem>
          <MenuItem value="370">高松</MenuItem>
          <MenuItem value="380">松山</MenuItem>
          <MenuItem value="390">高知</MenuItem>
          <MenuItem value="400">福岡</MenuItem>
          <MenuItem value="401">北九州</MenuItem>
          <MenuItem value="410">佐賀</MenuItem>
          <MenuItem value="420">長崎</MenuItem>
          <MenuItem value="430">熊本</MenuItem>
          <MenuItem value="440">大分</MenuItem>
          <MenuItem value="450">宮崎</MenuItem>
          <MenuItem value="460">鹿児島</MenuItem>
          <MenuItem value="470">沖縄</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
