FROM continuumio/miniconda3

RUN mkdir -p /backend
COPY ./backend /backend

RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/DRF-shop/bin:$PATH
RUN echo "source activate DRF-shop">~/.bashrc

WORKDIR /backend