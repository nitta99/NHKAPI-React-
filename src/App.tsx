import "./styles.css";
import { AreaSelect } from "./components/AreaSelect";
import { ServiceSelect } from "./components/ServiceSelect";
import { GenreSelect } from "./components/GenreSelect";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid, Button, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export const App = () => {
  const [news, setNews] = useState([]);

  const [area, setArea] = useState<string | HTMLInputElement>();
  const [service, setService] = useState<string | HTMLInputElement>();
  const [genre, setGenre] = useState<string | HTMLInputElement>();
  const [date, setDate] = useState<Date | null>(null);

  const onClickSearch = () => {
    // NHK APIのエンドポイントとアクセスキーを設定
    const apiUrl = `https://api.nhk.or.jp/v2/pg/list/${area}/${service}/${date
      ?.toISOString()
      .slice(0, 10)}.json`;
    const apiKey = "vIwwo0nBtxJUnw5A0sSsq9is4n8O6QM3";
    // APIリクエストを行う関数
    const fetchNews = async () => {
      try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`);
        console.log(response);
        const data = await response.json();
        console.log(data.list);
        setNews(data.articles); // 受け取ったデータをstateにセット
      } catch (error) {
        console.error("Error fetching NHK news:", error);
      }
    };

    fetchNews();
  };

  // 日付の取得
  const handleChange = (newValue: Date | null) => {
    setDate(newValue);
  };
  // 地域の取得
  const onChangeArea = (event: SelectChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  };
  // チャンネルの取得
  const onChangeService = (event: SelectChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
  };
  // ジャンルの取得
  const onChangeGenre = (event: SelectChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  return (
    <div className="App">
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <AreaSelect onChange={onChangeArea} />
        </Grid>
        <Grid item xs={3}>
          <ServiceSelect onChange={onChangeService} />
        </Grid>
        <Grid item xs={3}>
          <GenreSelect onChange={onChangeGenre} />
        </Grid>
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ width: "200px" }}
              value={date}
              onChange={handleChange}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Button
        sx={{ width: "100px", marginTop: "5px", textAlign: "center" }}
        variant="contained"
        type="submit"
        onClick={onClickSearch}
      >
        検索
      </Button>
      <div>
        <ul>
          {news?.map((i, index) => (
            <li key={index}>{i.list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
